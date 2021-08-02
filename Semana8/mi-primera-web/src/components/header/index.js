const Header = (props) => { /* props ahi guarda todo lo que le envio*/
  const { nombre } = props;
  
  return (
    <div>
      <ul>
        <li>Inicio</li>
        <li>Contacto</li>
        <li>Nosotros</li>
        <li>Ayuda</li>
        <li>{nombre}</li>
      </ul>
    </div>
  );
};
 export default Header;