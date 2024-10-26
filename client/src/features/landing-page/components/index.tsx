import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ArrowRight, DownloadIcon, PhoneCallIcon } from 'lucide-react';

import { Link } from 'react-router-dom';

export const LandingPage = () => {
  return (
    <>
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
          <div className="flex justify-between gap-5 px-4 text-center ">
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
                  <div className="mt-2 flex justify-center gap-2 ">
                    <Link to="/pendaftaran" className="w-1/2 ">
                      <Button variant="primary" className="flex justify-center w-full">
                        Daftar Sekarang
                      </Button>
                    </Link>
                    <Link to="https://www.ut.ac.id/program-studi/" className="w-1/2 ">
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
        <div className="mt-10 h-3/5">
          <div className="text-center">
            <h4>Frequently Asked Questions</h4>
          </div>
          <div className="mt-10 flex justify-center space-y-2">
            <div className="w-4/5">
              <div className="collapse collapse-arrow">
                <input type="radio" name="my-accordion-2" defaultChecked />
                <div className="collapse-title text-xl font-medium">Click to open this one and close others</div>
                <div className="collapse-content">
                  <p>hello</p>
                </div>
              </div>
              <hr />
              <div className="collapse collapse-arrow">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title text-xl font-medium">Click to open this one and close others</div>
                <div className="collapse-content">
                  <p>hello</p>
                </div>
              </div>
              <hr />
              <div className="collapse collapse-arrow">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title text-xl font-medium">Click to open this one and close others</div>
                <div className="collapse-content">
                  <p>hello</p>
                </div>
              </div>
              <hr />
              <div className="collapse collapse-arrow">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title text-xl font-medium">Click to open this one and close others</div>
                <div className="collapse-content">
                  <p>hello</p>
                </div>
              </div>
              <hr />
            </div>
          </div>
        </div>
        <footer className="footer bg-slate-400 p-10 text-white">
          <nav>
            <h6 className="footer-title">Services</h6>
            <a className="link-hover link">Branding</a>
            <a className="link-hover link">Design</a>
            <a className="link-hover link">Marketing</a>
            <a className="link-hover link">Advertisement</a>
          </nav>
          <nav>
            <h6 className="footer-title">Company</h6>
            <a className="link-hover link">About us</a>
            <a className="link-hover link">Contact</a>
            <a className="link-hover link">Jobs</a>
            <a className="link-hover link">Press kit</a>
          </nav>
          <nav>
            <h6 className="footer-title">Legal</h6>
            <a className="link-hover link">Terms of use</a>
            <a className="link-hover link">Privacy policy</a>
            <a className="link-hover link">Cookie policy</a>
          </nav>
        </footer>
        <footer className="footer border-t border-base-300 bg-base-200 px-10 py-4 text-base-content">
          <aside className="grid-flow-col items-center">
            <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd" className="fill-current">
              <path d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"></path>
            </svg>
            <p>
              ACME Industries Ltd.
              <br />
              Providing reliable tech since 1992
            </p>
          </aside>
          <nav className="md:place-self-center md:justify-self-end">
            <div className="grid grid-flow-col gap-4">
              <a>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                </svg>
              </a>
              <a>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current">
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
                </svg>
              </a>
              <a>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                </svg>
              </a>
            </div>
          </nav>
        </footer>
      </div>
    </>
  );
};
