function PaginationComponent() {
  const paginationTileCommons =
    'cursor-pointer text-sm text-emperor-100 flex justify-center items-center w-8 h-8 rounded-lg font-bold transition-colors hover:bg-emperor-700';
  return (
    <div className="flex space-x-2">
      <span className={`${paginationTileCommons} bg-emperor-1000`}>1</span>

      <span className={`${paginationTileCommons} bg-emperor-900`}>2</span>

      <span className={`${paginationTileCommons} `}>...</span>

      <span className={`${paginationTileCommons} bg-emperor-900`}>19</span>

      <span className={`${paginationTileCommons} bg-emperor-900 `}>20</span>
    </div>
  );
}

export default PaginationComponent;
