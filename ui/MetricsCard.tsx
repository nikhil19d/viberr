export const MetricsCard = ({ count, title, desc }: { count: string, title: string, desc: string }) => {
  return (
    <div className="w-60 h-40 text-center">
      <h1 className="text-5xl font-semibold mb-3 metric">{count}</h1>
      <h1 className="text-base font-medium mb-2">{title}</h1>
      <p className="text-sm font-normal text">{desc}</p>
    </div>
  )
}
