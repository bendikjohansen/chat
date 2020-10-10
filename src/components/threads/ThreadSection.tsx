import Box from "@material-ui/core/Box";
import React, { useMemo } from "react";
import { ThreadList, ThreadListItem } from ".";
import { Thread } from "../../redux/slices/threadSlice";

interface Props {
  threads: Thread[];
  current: Thread | null;
}

const ThreadSection = ({ threads, current }: Props) => {
  const currentId = useMemo(() => current?.id || '', [current]);

  return (
    <Box minWidth="300px">
      <ThreadList>
        {threads.map((thread) => (
          <ThreadListItem key={thread.id} thread={thread} currentId={currentId} />
        ))}
      </ThreadList>
    </Box>
  );
};

export default ThreadSection;
