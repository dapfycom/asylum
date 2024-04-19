import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { Link } from 'react-router-dom';

const MarkerDialog = ({
  isOpen,
  setIsOpen,
  noBUtton,
  description,
  title,
  noSoon,
  path
}: {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  noBUtton?: boolean;
  description: any;
  title: string;
  noSoon?: boolean;
  path: string;
}) => {
  return (
    <Dialog open={isOpen} onOpenChange={(open) => setIsOpen(open)}>
      <DialogContent className='max-w-[325px] text-center'>
        <div className='grid gap-4'>
          <div className='space-y-2'>
            <h4 className='font-medium leading-none text-3xl'>
              {title} <br />{' '}
              {!noSoon && <Badge className={'mt-1'}> coming soon</Badge>}
            </h4>
            <div className='text-sm text-muted-foreground'>{description}</div>
          </div>
          {!noBUtton && (
            <Link to={path}>
              <Button disabled={!path}>Open App</Button>
            </Link>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default MarkerDialog;
