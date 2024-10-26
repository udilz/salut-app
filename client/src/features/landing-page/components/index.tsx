import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ArrowRight, DownloadIcon, PhoneCallIcon } from 'lucide-react';
import { Helmet } from 'react-helmet';

import { Link } from 'react-router-dom';

export const LandingPage = () => {
  return (
    <>
      <Helmet>Home</Helmet>
      <div className="relative h-5/6 w-full">
        <img className="h-full w-screen object-cover" src="/mahasiswa.jpeg" alt="" />
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <div className="flex flex-col justify-center">
            <h3 className="rounded-lg p-3 text-2xl font-bold text-white">Sistem Informasi Layanan Universitas Terbuka Cipanas</h3>
            <div className="flex justify-center">
              <Link to="/pendaftaran" className="w-1/3">
                <Button startContent={<ArrowRight />} variant="outline" className="flex justify-center p-3 text-white">
                  Daftar Sekarang
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="h-full w-full">
        <div className="mt-12 flex justify-center">
          <div className="w-fit">
            <h4>Apa itu Universitas Terbuka?</h4>
          </div>
        </div>
        <div className="mt-6 flex justify-center">
          <div className="w-1/3">
            <p className="text-center">Perguruan tinggi (PT) negeri yang menyelenggarakan layanan pendidikannya dengan menerapkan sistem Pendidikan Tinggi Terbuka dan Jarak Jauh (PTTJJ).</p>
          </div>
        </div>
        <div className="mt-10 w-full">
          <div className="flex justify-between gap-5 px-4 text-center">
            <Card className="w-1/2 rounded-md bg-slate-100 px-3 py-3">
              <h5>Apa Itu Pendidikan Tinggi Terbuka?</h5>
              <p>Terbuka maksudnya siapapun WNI yang telah lulus minimal SLTA/Sederajat dapat mengikuti kuliah di UT tanpa dibatasi usia, tahun kelulusan atau tahun ijazah, dan lama studi.</p>
            </Card>
            <Card className="w-1/2 rounded-md bg-slate-100 px-3 py-3">
              <h5>Apa Itu Jarak Jauh?</h5>
              <ul>
                <li>Pembelajaran ditandai dengan keterpisahan jarak antara dosen dan mahasiswa; </li>
                <li>Pembelajaran dijembatani dengan menggunakan media belajar (baik media cetak/non-cetak, dan/atau elektronik) dan sumber belajar lain, serta didukung dengan penyediaan tutorial/bimbingan tatap muka/online. Khusus untuk mata kuliah yang menuntut penguasaan keterampilan, mahasiswa wajib mengikuti kegiatan praktik/praktikum baik secara mandiri ataupun terbimbing.</li>
              </ul>
            </Card>
          </div>
        </div>
        <div className="mt-10 w-full">
          <div className="flex justify-center">
            <div>
              <h4>Informasi Pendaftaran</h4>
            </div>
          </div>
          <div className="mt-5 flex justify-center">
            <div className="flex w-5/6 items-center justify-center space-x-10">
              <div className="space-y-2">
                <div className="text-center">
                  <p className="font-semibold">Pendaftaran Mahasiswa Baru Universitas Terbuka</p>
                </div>
                <Card>
                  <p>Tanggal Pendaftaran</p>
                </Card>
                <div>
                  <div className="mt-2 flex justify-center gap-2">
                    <Link to="/pendaftaran" className="w-1/2">
                      <Button variant="primary" className="flex w-full justify-center">
                        Daftar Sekarang
                      </Button>
                    </Link>
                    <Link to="https://www.ut.ac.id/program-studi/" className="w-1/2">
                      <Button variant="primary" className="flex w-full justify-center">
                        Program Studi
                      </Button>
                    </Link>
                  </div>
                  <div className="mt-3">
                    <Button startContent={<PhoneCallIcon />} variant="outline" className="flex w-full justify-center">
                      Konsultasi Dulu
                    </Button>
                  </div>
                </div>
              </div>
              <div className="mt-10 w-1/3 space-y-2">
                <p className="text-center font-semibold">Persyaratan Mahasiswa Baru</p>
                <div className="collapse collapse-plus bg-slate-100">
                  <input type="radio" name="my-accordion-3" defaultChecked />
                  <div className="collapse-title text-sm font-semibold">Mahasiswa Baru Non RPL</div>
                  <div className="collapse-content text-sm">
                    <p>1. Formulir Pendaftaran</p>
                    <p>2. Tanda Tangan Mahasiswa</p>
                    <p>3. Surat Pernyataan Keabsahan Dokumen</p>
                    <p>4. Foto KTP Asli dan Fotocopy KTP</p>
                    <p>5. Foto 3x4 (Berwarna, Softfile dan Cetaknya)</p>
                    <p>6. Fotocopy Ijazah Legalisir Cap Basah (Bentuk Pdf dan Cetaknya)</p>
                    <p>7. Bagi Jurusan FKIP Melampirkan Surat Keterangan Mengajar </p>
                    <p>8. Bagi Jurusan PAI Melampirkan Surat Keterangan Dapat Membaca Al-Quran </p>
                  </div>
                </div>
                <div className="collapse collapse-plus bg-slate-100">
                  <input type="radio" name="my-accordion-3" />
                  <div className="collapse-title text-sm font-semibold">Mahasiswa Baru RPL / Alih Kredit</div>
                  <div className="collapse-content text-sm">
                    <p>1. Formulir Pendaftaran</p>
                    <p>2. Tanda Tangan Mahasiswa</p>
                    <p>3. Surat Pernyataan Keabsahan Dokumen</p>
                    <p>4. Foto KTP Asli dan Fotocopy KTP</p>
                    <p>5. Foto 3x4 (Berwarna, Softfile dan Cetaknya)</p>
                    <p>6. Fotocopy Ijazah Legalisir Cap Basah (Bentuk Pdf dan Cetaknya)</p>
                    <p>7. Fotocopy Ijazah Legalisir SMA/SMK/Sederajat Legalisir Cap Basah (Bentuk Pdf dan Cetaknya)</p>
                    <p>8. Screenshot PDDIKTI/Surat Penyelengaraan</p>
                    <p>9. Surat Keterangan Mutasi Mahasiswa (Bagi Mahasiswa yang belum lulus)</p>
                    <p>10. Fotocopy Transkrip Nilai Legalisir Cap Basah</p>
                    <p>11. Daftar Riwayat Hidup (Diunduh dari Web)</p>
                  </div>
                </div>
                <div>
                  <Button startContent={<DownloadIcon />} className="flex w-full justify-center" variant="primary">
                    Unduh Formulir
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-10">
          <div className="p-5">
            <div className="text-center">
              <h4>Informasi Fakultas</h4>
            </div>
            <div className="mt-10 flex h-1/2 justify-center gap-5">
              <Link className="w-1/5" to="https://feb.ut.ac.id/">
                <Card startContent={<ArrowRight />} className="bg-slate-200">
                  <h5>Fakultas Ekonomi dan Bisnis</h5>
                </Card>
              </Link>
              <Link to="https://fhisip.ut.ac.id/" className="w-1/5">
                <Card startContent={<ArrowRight />} className="bg-orange-200">
                  <h5>Fakultas Hukum, Ilmu Sosial, dan Ilmu Politik</h5>
                </Card>
              </Link>
              <Link to="https://fkip.ut.ac.id/" className="w-1/5">
                <Card startContent={<ArrowRight />} className="bg-purple-200">
                  <h5>Fakultas Keguruan dan Ilmu Pendidikan</h5>
                </Card>
              </Link>
              <Link to="https://fst.ut.ac.id/" className="w-1/5">
                <Card startContent={<ArrowRight />} className="bg-blue-200">
                  <h5>Fakultas Sains dan Teknologi</h5>
                </Card>
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-10 h-5/6">
          <div className="text-center">
            <h4>Frequently Asked Questions</h4>
          </div>
          <div className="mt-10 flex justify-center space-y-2">
            <div className="w-4/5">
              <div className="collapse collapse-arrow">
                <input type="radio" name="my-accordion-2" defaultChecked />
                <div className="collapse-title text-lg font-medium">Apakah Program Studi UT Sudah Terakreditasi?</div>
                <div className="collapse-content">
                  <p>Ya, program studi Univesitas Terbuka sudah terakreditasi A dan B oleh BAN-PT. Untuk nilai akreditasi program studi di UT dapat dilihat di website UT dengan alamat www.ut.ac.id pada tautan Akreditasi BAN-PT.</p>
                </div>
              </div>
              <hr />
              <div className="collapse collapse-arrow">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title text-lg font-medium">Apakah Universitas Terbuka Termasuk Negeri atau Swasta?</div>
                <div className="collapse-content">
                  <p>UT adalah PT Negeri ke-45 di Indonesia.</p>
                </div>
              </div>
              <hr />
              <div className="collapse collapse-arrow">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title text-lg font-medium">Apa Bedanya Sistem Pembelajaran Di Universitas Terbuka Dengan Perguruan Tinggi Negeri?</div>
                <div className="collapse-content">
                  <p>Belajar di UT menggunakan sistem belajar mandiri tanpa mewajibkan datang ke kampus, sedangkan belajar di perguruan tinggi dilakukan dengan datang ke kampus atau tatap muka.</p>
                </div>
              </div>
              <hr />
              <div className="collapse collapse-arrow">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title text-lg font-medium">Berapa Uang Pendaftaran atau Uang Pangkal Kuliah di UT untuk Program Sarjana dan Diploma?</div>
                <div className="collapse-content">
                  <p>Di UT tidak ada uang pangkal/uang pendaftaran. Yang ada hanya biaya SPP per semester. Khusus untuk program S2 ada biaya admisi/tes masuk, selain SPP.</p>
                </div>
              </div>
              <hr />
              <div className="collapse collapse-arrow">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title text-lg font-medium">Apakah Kegiatan Belajar Selama Kuliah di UT Hanya Dilakukan Secara Online?</div>
                <div className="collapse-content">
                  <p>Tidak. Banyak pilihan yang dapat diambil mahasiswa sesuai dengan kebutuhan dan keadaanya. Selain belajar secara online, di UT pun terdapat fasilitas belajar berupa bimbingan/tutorial tatap muka, praktik/praktikum, dan sebagainya.</p>
                </div>
              </div>
              <hr />
              <div className="collapse collapse-arrow">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title text-lg font-medium">Apakah Ada Tes Masuk Untuk Kuliah di Universitas Terbuka?</div>
                <div className="collapse-content">
                  <p>Tidak ada tes masuk kecuali untuk Program S2.</p>
                </div>
              </div>
              <hr />
            </div>
          </div>
        </div>
        <footer className="footer bg-slate-400 p-10 text-white">
          <nav>
            <h6 className="footer-title">Fakultas Universitas Terbuka</h6>
            <a href="https://feb.ut.ac.id/" target="_blank" rel="noopener noreferrer" className="link-hover link">
              Fakultas Ekonomi dan Bisnis
            </a>
            <a href="https://fhisip.ut.ac.id/" className="link-hover link" target="_blank" rel="noopener noreferrer">
              Fakultas Hukum, Ilmu Sosial dan Politik
            </a>
            <a href="https://fkip.ut.ac.id/" className="link-hover link" target="_blank" rel="noopener noreferrer">
              Fakultas Keguruan dan Ilmu Pendidikan
            </a>
            <a href="https://fst.ut.ac.id/" className="link-hover link" target="_blank" rel="noopener noreferrer">
              Fakultas Sains dan Teknologi
            </a>
          </nav>
          <nav>
            <h6 className="footer-title">Company</h6>
            <a className="link-hover link">About us</a>
            <a className="link-hover link">Contact</a>
            <a className="link-hover link">Jobs</a>
            <a className="link-hover link">Press kit</a>
          </nav>
        </footer>
        <footer className="footer border-t border-base-300 bg-slate-400 px-10 py-4 text-white">
          <aside className="grid-flow-col items-center">
            <img src="/salut.png" height={100} width={100} alt="" />
            <p>
              SALUT Priangan Mandiri Cipanas.
              <br />
              Komplek Ruko Tunas Kembang : Cipendawa, Kec. Pacet, Kabupaten Cianjur, Jawa Barat 43253.
            </p>
          </aside>
          <nav className="md:place-self-center md:justify-self-end">
            <div className="grid grid-flow-col gap-4">
              <a href="https://www.instagram.com/salutpmc/ " target="_blank" rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-instagram">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </a>
            </div>
          </nav>
        </footer>
      </div>
    </>
  );
};
