export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6 p-8">
      <h1 className="text-4xl font-bold">daisyUI Dark Mode is Active! 🎉</h1>
      
      <div className="flex gap-4">
        <button className="btn btn-primary">Primary Button</button>
        <button className="btn btn-secondary">Secondary Button</button>
        <button className="btn btn-accent">Accent Button</button>
      </div>

      <div className="card w-96 bg-base-200 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">Card Title</h2>
          <p>If you see a dark gray card with styled buttons, daisyUI is working perfectly!</p>
        </div>
      </div>
    </main>
  );
}