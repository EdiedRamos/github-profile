interface InfoBadge {
  title: string;
  content: string;
}

export const InfoBadge = ({ title, content }: InfoBadge) => {
  return (
    <div className="bg-cc-midnight-blue rounded-[8px] flex flex-wrap gap-4 px-[20px] py-[16px] justify-center md:justify-start">
      <p className="text-cc-midnight-gray inline-block">{title}</p>
      <hr className="border-cc-midnight-gray border-[1px]  h-6" />
      <p className="text-cc-misty-gray inline-block">{content}</p>
    </div>
  );
};
