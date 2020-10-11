import Box from "@material-ui/core/Box";
import List from "@material-ui/core/List";
import { makeStyles } from "@material-ui/core/styles";
import React, { useMemo } from "react";
import { ThreadListItem } from ".";
import { Thread } from "../../redux/slices/threadSlice";
import SearchInput from "./SearchInput";
import ThreadListHeader from "./ThreadListHeader";

interface Props {
  threads: Thread[];
  selected: Thread | undefined;
  onCreateThreadClick: () => void;
}

const useStyles = makeStyles({
  root: {
    overflowY: "scroll",
    height: '100%'
  },
});

const ThreadSection = ({ threads, selected, onCreateThreadClick }: Props) => {
  const classes = useStyles();
  const currentId = useMemo(() => selected?.id || "", [selected]);

  return (
    <Box minWidth="300px">
      <List>
        <ThreadListHeader onCreateThreadClick={onCreateThreadClick} />
        <SearchInput />
      </List>
      <Box>
        <List className={classes.root}>
          {threads.map((thread) => (
            <ThreadListItem
              key={thread.id}
              thread={thread}
              currentId={currentId}
            />
          ))}
        </List>
      </Box>
    </Box>
  );
};

export default ThreadSection;
