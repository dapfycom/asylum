import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { PhoneIcon } from 'lucide-react';

export default function JeeterCalling({
  isOpen,
  onAccept,
  onDecline,
  onClose
}: {
  isOpen: boolean;
  onAccept: () => void;
  onDecline: () => void;
  onClose: () => void;
}) {
  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      {/* @ts-expect-error  oXClose noOverlay  */}
      <DialogContent noXClose noOverlay className='w-full max-w-[300px]'>
        <div>
          <Card>
            <CardHeader className='flex flex-col items-center gap-2 p-4'>
              <CardTitle>Call</CardTitle>
              <PhoneIcon className='w-10 h-10 animate-wiggle' />
              <CardDescription>Pajeet is calling...</CardDescription>
            </CardHeader>
            <CardContent className='flex flex-col xs:flex-row justify-center p-4 gap-2'>
              <Button
                size='sm'
                variant='outline'
                className='bg-green-600 hover:bg-green-600/80 font-normal'
                onClick={onAccept}
              >
                Answer
              </Button>
              <Button
                className='bg-red-600 hover:bg-red-600/80 font-normal '
                size='sm'
                variant='outline'
                onClick={onDecline}
              >
                Decline
              </Button>
            </CardContent>
          </Card>
        </div>
      </DialogContent>
    </Dialog>
  );
}
