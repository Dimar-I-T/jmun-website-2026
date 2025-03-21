const FontTest = () => {
  return (
    <div className="p-8 space-y-8 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-center text-black">Font Test</h1>

      {/* BodoniIf Tests */}
      <div className="text-black">
        <h2 className="text-xl font-bodoni font-semibold">BodoniIf</h2>
        <p className="font-bodoni font-normal">Bodoni Regular</p>
        <p className="font-bodoni font-bold">Bodoni Bold</p>
        <p className="font-bodoni italic">Bodoni Italic</p>
        <p className="font-bodoni font-bold italic">Bodoni Bold Italic</p>
      </div>

      {/* Georgia Tests */}
      <div className="text-black">
        <h2 className="text-xl font-semibold font-georgia">Georgia</h2>
        <p className="font-georgia font-normal">Georgia Regular</p>
        <p className="font-georgia font-bold">Georgia Bold</p>
        <p className="font-georgia italic">Georgia Italic</p>
        <p className="font-georgia font-bold italic">Georgia Bold Italic</p>
      </div>

      {/* Plus Jakarta Sans Tests */}
      <div className="text-black">
        <h2 className="text-xl font-semibold">Plus Jakarta Sans</h2>
        <p className="font-plus-jakarta font-thin">Plus Jakarta Thin</p>
        <p className="font-plus-jakarta font-light">Plus Jakarta Light</p>
        <p className="font-plus-jakarta font-normal">Plus Jakarta Regular</p>
        <p className="font-plus-jakarta font-medium">Plus Jakarta Medium</p>
        <p className="font-plus-jakarta font-semibold">
          Plus Jakarta Semi-bold
        </p>
        <p className="font-plus-jakarta font-bold">Plus Jakarta Bold</p>
        <p className="font-plus-jakarta font-extrabold">
          Plus Jakarta Extra-bold
        </p>
        <p className="font-plus-jakarta font-black">Plus Jakarta Black</p>
      </div>
    </div>
  );
};

export default FontTest;
