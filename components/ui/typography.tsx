type props = {
  content: string;
};

export function H4({ content }: props) {
  return (
    <h4 className='scroll-m-20 text-xl font-semibold tracking-tight'>
      {content}
    </h4>
  );
}

export function P({ content }: props) {
  return <p className='leading-7 [&:not(:first-child)]:mt-6'>{content}</p>;
}
