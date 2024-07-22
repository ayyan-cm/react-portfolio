export default function Header() {
  return (
    <div className=" m-10 flex justify-between items-baseline">
      <div className="text-3xl font-bold">Welcome,</div>
      <nav>
        <ul className="flex space-x-8 seen">
          <li className="hover:text-blue-400 hover:scale-110">Home</li>
          <li className="hover:text-blue-400 hover:scale-110">Resume</li>
          <li className="hover:text-blue-400 hover:scale-110">Activities</li>
          <li className="hover:text-blue-400 hover:scale-110">Contact</li>
        </ul>
      </nav>
    </div>
  );
}
