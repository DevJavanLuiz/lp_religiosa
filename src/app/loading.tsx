export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F1E7D8]">
      <div className="flex flex-col items-center gap-4">
        <div className="w-10 h-10 border-3 border-[#C9B89F] border-t-[#B8903F] rounded-full animate-spin" />
        <p className="text-sm text-[#4D3F31] font-medium">Carregando...</p>
      </div>
    </div>
  )
}
