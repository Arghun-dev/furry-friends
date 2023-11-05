import Search from './Search';

export default function PageHeader() {
  return (
    <header className='mb-8 py-8'>
      <nav className='flex items-center justify-between'>
        <h1 className='text-[24px] md:text-[36px]'>Furry Friends</h1>
        <Search />
      </nav>
    </header>
  );
}
