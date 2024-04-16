import CallList from "@/components/CallList";

const Previous = () => {
  return (
    <section className="flex size-full flex-col gap-10 text-white">
      <h1 className="text-3xl font-bold">이전 회의</h1>

      <CallList type="ended" />
    </section>
  );
};

export default Previous;
