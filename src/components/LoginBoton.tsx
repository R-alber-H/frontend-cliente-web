
export default function LoginButton() {
  return (
    <button
      type="button"
      className="btn btn-outline-dark px-3 py-2"
      style={{
        borderRadius: '10px',
        transition: 'all 0.3s ease',
        borderWidth: '1px' 
      }}
      
      onClick={() => console.log("Iniciar sesión...")}
    >
      Iniciar Sesión
    </button>
  );
}