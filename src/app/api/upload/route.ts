import { NextRequest, NextResponse } from 'next/server';
import * as ftp from 'basic-ftp';
import { Readable } from 'stream';

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const file = formData.get('file') as File;

    if (!file) {
      return NextResponse.json({ error: 'Dosya seçilmedi' }, { status: 400 });
    }

    const buffer = Buffer.from(await file.arrayBuffer());
    const fileName = `${Date.now()}-${file.name.replace(/\s+/g, '-')}`;
    
    // FTP Configuration from User
    const client = new ftp.Client();
    // client.ftp.verbose = true;

    try {
      await client.access({
        host: "www.rootarge.com",
        user: "massgrup",
        password: "FfU_Gw48@aseltk5",
        secure: false // FTP usually uses plain text if not specified otherwise
      });

      // Navigate to the target directory
      await client.ensureDir("/httpdocs/cosmo/lablog");
      
      // Upload the file
      const source = new Readable();
      source.push(buffer);
      source.push(null);

      await client.uploadFrom(source, fileName);
      
      // Construct the public URL as requested by the user
      const publicUrl = `http://www.rootarge.com/cosmo/Numune/${fileName}`;
      
      return NextResponse.json({ url: publicUrl });

    } catch (err: any) {
      console.error('FTP Error:', err);
      return NextResponse.json({ error: `FTP Hatası: ${err.message}` }, { status: 500 });
    } finally {
      client.close();
    }

  } catch (error: any) {
    console.error('Upload Error:', error);
    return NextResponse.json({ error: 'Yükleme sırasında bir hata oluştu' }, { status: 500 });
  }
}
