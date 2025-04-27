export const Spinner: React.FC = () => {
  return (
    <>
      <div className="flex items-center justify-center w-full h-full">
        <div className="animate-spin rounded-full h-10 w-10 border-4 border-t-transparent border-[var(--color-vermilion-700)]" />
      </div>
    </>
  );
};
