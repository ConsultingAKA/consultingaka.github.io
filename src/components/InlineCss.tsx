export default function InlineCss() {
  return (
    <style jsx global>{`
      /* Base Tailwind utilities that might not be loading */
      .flex { display: flex; }
      .flex-col { flex-direction: column; }
      .flex-grow { flex-grow: 1; }
      .min-h-screen { min-height: 100vh; }
      
      /* Add your site's critical styles here */
      body {
        font-family: var(--font-inter), sans-serif;
        background-color: #f8f9fa;
      }
      
      /* Navigation styles */
      nav {
        display: flex;
        padding: 1rem;
        background-color: white;
        justify-content: space-between;
        align-items: center;
      }
      
      /* Main content styles */
      main {
        max-width: 1200px;
        margin: 0 auto;
        padding: 2rem;
      }
      
      /* Add other critical styles here */
    `}</style>
  );
}