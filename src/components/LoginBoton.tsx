
export default function LoginButton() {
  return (
    <button
      type="button"
      // CLASES DE BOOTSTRAP:
      // btn: Base del botón
      // btn-outline-light: Texto blanco, borde blanco, fondo transparente.
      //                   ¡Y ya hace automáticamente el hover a fondo blanco con texto negro!
      // px-4 py-2: Un buen espaciado interno (padding) para que se vea premium
      className="btn btn-outline-light px-2 py-1"
      
      // ESTILOS PERSONALIZADOS:
      // Bootstrap por defecto usa bordes muy redondeados o muy cuadrados.
      // Con esto aseguramos tus 10px exactos y una animación suave (transition).
      style={{
        borderRadius: '10px',
        transition: 'all 0.3s ease',
        borderWidth: '1px' // Borde delgado como pediste
      }}
      
      onClick={() => console.log("Iniciar sesión...")}
    >
      Iniciar Sesión
    </button>
  );
}