"use client";

import { useEffect, useRef } from "react";

// ─── Atom definitions ────────────────────────────────────────
const ATOM_TYPES = [
  { symbol: "C",  color: "#374151", radius: 18 },
  { symbol: "H",  color: "#9ca3af", radius: 13 },
  { symbol: "O",  color: "#ef4444", radius: 16 },
  { symbol: "N",  color: "#3b82f6", radius: 16 },
  { symbol: "S",  color: "#f59e0b", radius: 17 },
  { symbol: "P",  color: "#8b5cf6", radius: 17 },
  { symbol: "Cl", color: "#10b981", radius: 15 },
  { symbol: "Fe", color: "#f97316", radius: 18 },
];

// ─── Pre-built molecule structures ───────────────────────────
// Each molecule: atoms (relative x,y) + bonds (pairs of indices)
const MOLECULE_TEMPLATES = [
  {
    // Benzene ring
    atoms: [
      { t: 0 }, { t: 0 }, { t: 0 },
      { t: 0 }, { t: 0 }, { t: 0 },
    ],
    bonds: [[0,1],[1,2],[2,3],[3,4],[4,5],[5,0]],
    layout: "ring6",
  },
  {
    // Water H2O
    atoms: [{ t: 2 }, { t: 1 }, { t: 1 }],
    bonds: [[0,1],[0,2]],
    layout: "bent",
  },
  {
    // Ammonia NH3
    atoms: [{ t: 3 }, { t: 1 }, { t: 1 }, { t: 1 }],
    bonds: [[0,1],[0,2],[0,3]],
    layout: "pyramid",
  },
  {
    // CO2
    atoms: [{ t: 0 }, { t: 2 }, { t: 2 }],
    bonds: [[0,1],[0,2]],
    layout: "linear",
  },
  {
    // Ethanol
    atoms: [{ t: 0 }, { t: 0 }, { t: 2 }],
    bonds: [[0,1],[1,2]],
    layout: "chain",
  },
];

function buildAtomPositions(template: typeof MOLECULE_TEMPLATES[0], cx: number, cy: number, scale = 1) {
  const n = template.atoms.length;
  const positions: {x: number; y: number}[] = [];
  const d = 38 * scale;

  switch (template.layout) {
    case "ring6": {
      for (let i = 0; i < n; i++) {
        positions.push({
          x: cx + d * Math.cos((i * Math.PI * 2) / n - Math.PI / 6),
          y: cy + d * Math.sin((i * Math.PI * 2) / n - Math.PI / 6),
        });
      }
      break;
    }
    case "bent": {
      positions.push({ x: cx, y: cy });
      positions.push({ x: cx - d * 0.9, y: cy + d * 0.7 });
      positions.push({ x: cx + d * 0.9, y: cy + d * 0.7 });
      break;
    }
    case "pyramid": {
      positions.push({ x: cx, y: cy });
      positions.push({ x: cx - d, y: cy + d });
      positions.push({ x: cx, y: cy + d * 1.2 });
      positions.push({ x: cx + d, y: cy + d });
      break;
    }
    case "linear": {
      positions.push({ x: cx, y: cy });
      positions.push({ x: cx - d * 1.3, y: cy });
      positions.push({ x: cx + d * 1.3, y: cy });
      break;
    }
    default: // chain
      for (let i = 0; i < n; i++) {
        positions.push({ x: cx + (i - (n - 1) / 2) * d, y: cy + (i % 2 === 0 ? 0 : -d * 0.5) });
      }
  }
  return positions;
}

// ─── Live molecule instance ───────────────────────────────────
interface MolInstance {
  templateIdx: number;
  cx: number; cy: number;
  vx: number; vy: number;
  angle: number; av: number;  // rotation
  scale: number;
  opacity: number; targetOpacity: number;
  positions: {x: number; y: number}[];
}

export default function MoleculeCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let mols: MolInstance[] = [];
    let raf: number;

    const resize = () => {
      canvas.width = canvas.parentElement?.clientWidth ?? window.innerWidth;
      canvas.height = canvas.parentElement?.clientHeight ?? window.innerHeight;
      init();
    };

    const makeMol = (forcePos?: { x: number; y: number }): MolInstance => {
      const templateIdx = Math.floor(Math.random() * MOLECULE_TEMPLATES.length);
      const scale = 0.55 + Math.random() * 0.75;
      const cx = forcePos?.x ?? Math.random() * canvas.width;
      const cy = forcePos?.y ?? Math.random() * canvas.height;
      return {
        templateIdx,
        cx, cy,
        vx: (Math.random() - 0.5) * 0.45,
        vy: (Math.random() - 0.5) * 0.45,
        angle: Math.random() * Math.PI * 2,
        av: (Math.random() - 0.5) * 0.006,
        scale,
        opacity: 0,
        targetOpacity: 0.08 + Math.random() * 0.14,
        positions: buildAtomPositions(MOLECULE_TEMPLATES[templateIdx], cx, cy, scale),
      };
    };

    const init = () => {
      const count = Math.max(6, Math.floor((canvas.width * canvas.height) / 80000));
      mols = Array.from({ length: count }, () => makeMol());
    };

    const rotatePt = (x: number, y: number, cx: number, cy: number, a: number) => ({
      x: cx + (x - cx) * Math.cos(a) - (y - cy) * Math.sin(a),
      y: cy + (x - cx) * Math.sin(a) + (y - cy) * Math.cos(a),
    });

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (const mol of mols) {
        const tpl = MOLECULE_TEMPLATES[mol.templateIdx];
        const rotated = mol.positions.map(p => rotatePt(p.x, p.y, mol.cx, mol.cy, mol.angle));

        // Draw bonds
        ctx.save();
        ctx.globalAlpha = mol.opacity * 0.7;
        ctx.strokeStyle = "#94a3b8";
        ctx.lineWidth = 1.5 * mol.scale;
        ctx.lineCap = "round";
        for (const [a, b] of tpl.bonds) {
          ctx.beginPath();
          ctx.moveTo(rotated[a].x, rotated[a].y);
          ctx.lineTo(rotated[b].x, rotated[b].y);
          ctx.stroke();
        }
        ctx.restore();

        // Draw atoms
        for (let i = 0; i < tpl.atoms.length; i++) {
          const atomType = ATOM_TYPES[tpl.atoms[i].t];
          const r = atomType.radius * mol.scale;
          const { x, y } = rotated[i];

          ctx.save();
          ctx.globalAlpha = mol.opacity;

          // Atom circle
          const grad = ctx.createRadialGradient(x - r * 0.3, y - r * 0.3, r * 0.05, x, y, r);
          grad.addColorStop(0, atomType.color + "cc");
          grad.addColorStop(1, atomType.color + "44");
          ctx.beginPath();
          ctx.arc(x, y, r, 0, Math.PI * 2);
          ctx.fillStyle = grad;
          ctx.fill();

          // Atom border
          ctx.strokeStyle = atomType.color + "66";
          ctx.lineWidth = 0.8;
          ctx.stroke();

          // Symbol label
          if (r > 9) {
            ctx.fillStyle = atomType.color;
            ctx.font = `bold ${Math.round(r * 0.85)}px -apple-system, "SF Pro Display", sans-serif`;
            ctx.textAlign = "center";
            ctx.textBaseline = "middle";
            ctx.fillText(atomType.symbol, x, y);
          }

          ctx.restore();
        }

        // Animate
        mol.angle += mol.av;
        mol.cx += mol.vx;
        mol.cy += mol.vy;
        mol.opacity += (mol.targetOpacity - mol.opacity) * 0.02;

        // Rebuild positions after move
        mol.positions = buildAtomPositions(MOLECULE_TEMPLATES[mol.templateIdx], mol.cx, mol.cy, mol.scale);

        // Wrap edges with fade-out/in
        const pad = 120;
        if (mol.cx < -pad || mol.cx > canvas.width + pad || mol.cy < -pad || mol.cy > canvas.height + pad) {
          // Respawn from opposite edge
          mol.cx = mol.cx < 0 ? canvas.width + pad : (mol.cx > canvas.width + pad ? -pad : mol.cx);
          mol.cy = mol.cy < 0 ? canvas.height + pad : (mol.cy > canvas.height + pad ? -pad : mol.cy);
          mol.positions = buildAtomPositions(MOLECULE_TEMPLATES[mol.templateIdx], mol.cx, mol.cy, mol.scale);
          mol.opacity = 0;
        }
      }

      raf = requestAnimationFrame(draw);
    };

    window.addEventListener("resize", resize);
    resize();
    draw();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        display: "block",
      }}
    />
  );
}
