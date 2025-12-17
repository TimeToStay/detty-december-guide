import Logo from './ui/logo'

export default function Footer() {
  return (
    <footer className="border-t border-[#E5E5E5] py-12 px-6 md:px-12 lg:px-24">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div>
            <Logo invert="invert" />
            <p className="text-sm text-black/60">Lagos / Nigeria</p>
          </div>
          <div className="text-sm text-black/60">
            <p>Practical guidance for Detty December</p>
            <p className="mt-1">© {new Date().getFullYear()} Timetostay.com</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
