import ListItemText from "@material-ui/core/ListItemText";
import React from "react";
import { Thread } from "../../redux/slices/threadSlice";

interface Props {
  thread: Thread;
}

const ThreadHeaderItem = ({ thread }: Props) => (
  <>
    {/* <ListItemAvatar>
      <Avatar alt={thread?.name} src={thread?.profilePicture} />
    </ListItemAvatar> */}
    <ListItemText primary={thread?.name} secondary="Active 8 minutes ago" />
  </>
);

export default ThreadHeaderItem;
