import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
export const Navbar = () => {
  return (
    <nav>
      <div className="flex items-center justify-between gap-4 px-10 py-4 shadow-md">
        <div>
          <img src="/salut.png" alt="" height={100} width={150} />
        </div>
        <div className="">
          <ul className="flex gap-4">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/pendaftaran">Pendaftaran</Link>
          </ul>
        </div>
        <div className="flex gap-2">
          <Link to="/login">
            <Button variant="outline">Login</Button>
          </Link>
          <Button variant="black">Register</Button>
        </div>
      </div>
    </nav>
  );
};
