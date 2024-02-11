import * as React from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { useAppDispatch, useAppSelector } from "~/lib/hooks";
import { trigger } from "~/lib/features/searchDateSlice";
import CloseIcon from "@mui/icons-material/Close";

interface modalProps {
  isOpen: boolean;
}

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

export const ModalFullScreen: React.FC<modalProps> = ({ isOpen, ...props }) => {
  {
    const isClickSearchDate: boolean = useAppSelector(
      (selector) => selector.searchDate
    );
    const dispatch = useAppDispatch();
    const handleOnSearchClick = () => {
      dispatch(trigger(!isClickSearchDate));
    };
    return (
      <React.Fragment>
        <BootstrapDialog
          onClose={() => {
            handleOnSearchClick();
          }}
          aria-labelledby="customized-dialog-title"
          open={isOpen}
        >
          <DialogContent>
            <div className="grid grid-cols-2">
              <Typography gutterBottom>Calendar</Typography>
              <IconButton
                aria-label="close"
                onClick={() => handleOnSearchClick()}
                sx={{
                  position: "absolute",
                  right: 8,
                  top: 8,
                  color: (theme) => theme.palette.grey[500],
                }}
              >
                <CloseIcon />
              </IconButton>
            </div>
          </DialogContent>
        </BootstrapDialog>
      </React.Fragment>
    );
  }
};
