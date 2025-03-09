interface DeleteIconProps {
  className?: string;
  width?: number;
}

const DeleteIcon = ({ className, width = 20 }: DeleteIconProps) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 24 24'
    stroke='currentColor'
    width={`${width}px`}
    className={className}
    data-testid='delete-icon'
  >
    <path
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={2}
      d='M6 18L18 6M6 6l12 12'
    />
  </svg>
);

export default DeleteIcon;
