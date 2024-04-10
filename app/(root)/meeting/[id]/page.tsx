const Meeting = ({ params: { id } }: { params: { id: string } }) => {
  return <div>Meeting Room: #{id}</div>;
};

export default Meeting;
