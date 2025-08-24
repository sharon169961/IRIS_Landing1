export default function Footer() {
  return (
    <footer className="w-full max-w-6xl mx-auto px-6 py-10 text-sm text-gray-400">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        <p>© {new Date().getFullYear()} IRIS. All rights reserved.</p>
        <div className="flex items-center gap-5">
          <a className="hover:text-gray-200" href="#">Privacy</a>
          <a className="hover:text-gray-200" href="#">Terms</a>
          <a className="hover:text-gray-200" href="mailto:hello@iris.example">Contact</a>
        </div>
      </div>
    </footer>
  );
}
