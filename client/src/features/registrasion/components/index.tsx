import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select } from '@/components/ui/select';
import { GrupWa, JenisKelamin, ProgramStudi } from '@/data/registrasion.data';

export const Registrasion = () => {
  return (
    <div className="h-full w-full">
      <div className="flex items-center justify-center py-6">
        <div className="flex w-1/3 justify-center px-10 py-10 text-center">
          <h5>Pendaftaran Mahasiswa Baru Sentra Layanan Universitas Terbuka Cipanas</h5>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="grid w-4/5 grid-cols-2 gap-5">
          <p>
            Nama Lengkap
            <Input placeholder="Isi Nama Lengkap"></Input>
          </p>
          <p>
            Tempat Lahir
            <Input placeholder="Isi Tempat Lahir"></Input>
          </p>
          <p>
            Tanggal Lahir
            <Input type="date" placeholder="Isi Tanggal Lahir"></Input>
          </p>
          <p>
            Jenis Kelamin
            <Select caption="Pilih Jenis Kelamin"  options={JenisKelamin}></Select>
          </p>
          <p>
            Asal Sekolah
            <Input placeholder="Isi Asal Sekolah"></Input>
          </p>
          <p>
            Alamat
            <Input placeholder="Isi Alamat"></Input>
          </p>
          <p>
            Nomor Handphone
            <Input placeholder="Isi Nomor Handphone"></Input>
          </p>
          <p>
            Rencana Program Studi
            <Select caption='Pilih Program Studi' options={ProgramStudi}></Select>
          </p>
          <p>
          Apakah Sudah Masuk Group Whatsapp Mahasiswa Baru?
            <Select caption='Pilih Disini' options={GrupWa}></Select>
          </p>
        </div>
      </div>
      <div className="flex justify-center py-6">
        <div className="flex w-4/5 justify-center">
          <Button variant="primary" className="flex w-full justify-center">
            Submit
          </Button>
        </div>
      </div>
    </div>
  );
};
