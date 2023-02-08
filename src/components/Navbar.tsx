export const Navbar = () => {
  return (
    <nav className="hidden md:block bg-white w-full px-4 menu shadow-md">
      <ul className="flex gap-4 menu__ul">
        <li className="menu__li">Lista de tarjetas</li>
        <li className="menu__li">Tranferencias y pagos</li>
        <li className="menu__li group">
          Atención al cliente
          <ul className="submenu hidden group-hover:block">
            <li className="submenu__li">Bloqueos</li>
            <li className="submenu__li">Cambio de contraseña</li>
          </ul>
          </li>
        <li className="menu__li">Empresas</li>
      </ul>
    </nav>
  )
}