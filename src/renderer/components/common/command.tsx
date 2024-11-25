import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList
} from '@/components/ui/command.tsx';
import React, { Fragment, PropsWithChildren } from 'react';
import { useEvent } from '@/hooks/useEvent.ts';

const CommandContent = () => {
  return (
    <Fragment>
      <CommandInput
        placeholder={`在XueFeng Li's 的ulin中搜索或提问吧...`}
        className='text-[16px]'
      />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading='Suggestions'>
          <CommandItem>Calendar</CommandItem>
          <CommandItem>Search Emoji</CommandItem>
          <CommandItem>Calculator</CommandItem>
        </CommandGroup>
      </CommandList>
    </Fragment>
  );
};

const CommandDialogWrap = (props: PropsWithChildren) => {
  const [open, setOpen] = React.useState(false);

  const emitter = useEvent();

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };
    document.addEventListener('keydown', down);
    emitter.on('search', () => {
      setOpen((open) => !open);
    });
    return () => document.removeEventListener('keydown', down);
  }, []);
  return (
    <CommandDialog open={open} onOpenChange={setOpen}>
      {props.children}
    </CommandDialog>
  );
};

const CommandWrap = (props: PropsWithChildren) => {
  return <Command>{props.children}</Command>;
};

interface CommandProps {
  dialog?: boolean;
}

export function SearchCommand(props: CommandProps) {
  const { dialog = true } = props;

  const CommandWrapper = dialog ? CommandDialogWrap : CommandWrap;

  return (
    <CommandWrapper>
      <CommandContent />
    </CommandWrapper>
  );
}
