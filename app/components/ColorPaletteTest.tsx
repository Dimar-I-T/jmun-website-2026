const ColorPaletteTest = () => {
  return (
    <div className="p-8 space-y-8 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-center">Color Palette Test</h1>

      <div className="grid grid-cols-2 md:grid-cols-3 md:grid-cols-4 gap-6">
        {/* Primary Red */}
        <div className="flex flex-col items-center space-y-2">
          <div className="w-20 h-20 rounded-lg border shadow-lg bg-red-dark"></div>
          <p className="text-sm font-medium">#8E0D16</p>
        </div>

        {/* Secondary Red */}
        <div className="flex flex-col items-center space-y-2">
          <div className="w-20 h-20 rounded-lg border shadow-lg bg-red-bright"></div>
          <p className="text-sm font-medium">#FC351C</p>
        </div>

        {/* Accent Pink */}
        <div className="flex flex-col items-center space-y-2">
          <div className="w-20 h-20 rounded-lg border shadow-lg bg-pink-dark"></div>
          <p className="text-sm font-medium">#D53A94</p>
        </div>

        {/* Highlight Pink */}
        <div className="flex flex-col items-center space-y-2">
          <div className="w-20 h-20 rounded-lg border shadow-lg bg-pink-light"></div>
          <p className="text-sm font-medium">#F49BBA</p>
        </div>

        {/* Deep Blue */}
        <div className="flex flex-col items-center space-y-2">
          <div className="w-20 h-20 rounded-lg border shadow-lg bg-deep-blue"></div>
          <p className="text-sm font-medium">Blue dark</p>
        </div>

        {/* Soft Beige */}
        <div className="flex flex-col items-center space-y-2">
          <div className="w-20 h-20 rounded-lg border shadow-lg bg-soft-beige"></div>
          <p className="text-sm font-medium">Soft beige</p>
        </div>

        {/* Gradient 1 */}
        <div className="flex flex-col items-center space-y-2">
          <div className="w-20 h-20 rounded-lg border shadow-lg bg-gradient-to-b from-deep-blue to-soft-beige"></div>
          <p className="text-sm font-medium">Gradient 1</p>
        </div>

        {/* Gradient 2 */}
        <div className="flex flex-col items-center space-y-2">
          <div className="w-20 h-20 rounded-lg border shadow-lg bg-gradient-to-b from-red-dark to bg-red-bright"></div>
          <p className="text-sm font-medium">Gradient 2</p>
        </div>

        {/* Gradient 3 */}
        <div className="flex flex-col items-center space-y-2">
          <div className="w-20 h-20 rounded-lg border shadow-lg bg-gradient-to-b from-pink-dark to-pink-light"></div>
          <p className="text-sm font-medium">Gradient 3</p>
        </div>
      </div>
    </div>
  );
};

export default ColorPaletteTest;
