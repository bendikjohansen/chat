import Avatar from "@material-ui/core/Avatar";
import ListItemText from "@material-ui/core/ListItemText";
import React from "react";
import { Thread } from "../../redux/slices/threadSlice";
import AvatarGroup from "@material-ui/lab/AvatarGroup";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";

interface Props {
  thread: Thread;
}

const ThreadHeaderItem = ({ thread }: Props) => (
  <>
    <ListItemAvatar>
      <AvatarGroup max={3}>
        {thread.users.map((user) => (
          <Avatar key={user.id} src={user.profilePicture} alt={user.name} />
        ))}
      </AvatarGroup>
    </ListItemAvatar>
    <ListItemText primary={thread?.name} secondary="Active 8 minutes ago" />
  </>
);

export default ThreadHeaderItem;
