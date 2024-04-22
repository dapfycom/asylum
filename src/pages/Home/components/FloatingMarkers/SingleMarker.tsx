import { MapMarker } from '@/components/ui/icons';
import PropTypes from 'prop-types';
import { Suspense, lazy, useState } from 'react';
const MarkerDialog = lazy(() => import('./MarkerDialog'));
const SingleMarker = ({
  className,
  label,
  noBUtton,
  description,
  noSoon,
  path
}: {
  className: string;
  label: string;
  noBUtton?: boolean;
  description: any;
  noSoon?: boolean;
  path: string;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <div
        className={
          'animate-bounce-slow fixed z-[20] cursor-pointer text-center flex flex-col items-center ' +
          className
        }
        onClick={() => setIsOpen(true)}
      >
        <div className='flex justify-center font-bold'>{label}</div>
        <MapMarker width='70' height='70' />
      </div>

      {isOpen && (
        <Suspense fallback={null}>
          <MarkerDialog
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            noBUtton={noBUtton}
            description={description}
            noSoon={noSoon}
            title={label}
            path={path}
          />
        </Suspense>
      )}
    </div>
  );
};

SingleMarker.defaultProps = {
  className: '',
  label: '',
  path: ''
};

SingleMarker.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string,
  path: PropTypes.string
};

export default SingleMarker;
