export default function FileContentCard({
  title,
  img,
}: {
  title: string;
  img: string;
}) {
  return (
    <div>
      <img src={img} className="w-12 h-12 sm:w-16 sm:h-16"/>
      <p className="text-center text-sm sm:text-base text-slate-200">{title}</p>
    </div>
  );
}
