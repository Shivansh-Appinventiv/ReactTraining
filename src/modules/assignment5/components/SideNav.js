import { Drawer, Link, makeStyles } from "@material-ui/core";
import PlaylistAddIcon from "@material-ui/icons/PlaylistAdd";
import {
  Logo,
  Mdown,
  Wave,
  Mup,
  CircularBoardIcon,
  RocketIcon,
  MsgOverlapIcon,
  BooksIcon,
  PaperIcon,
  InfoIcon,
  CopyIcon,
} from "./SvgIcons";
import clsx from "clsx";

const useStyles = makeStyles({
  drawerChange: {
    width: "100%",
    height: "100%",
    backgroundColor: "#1565c0",
  },
  imageWrapper: {
    width: "73px",
    height: "64px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  logoChange: {
    backgroundColor: "#373737",
  },
});

const listNav = [
  <Mdown />,
  <Mup />,
  <Wave />,
  <PlaylistAddIcon htmlColor={`white`} fontSize={`large`}/>,
  <CircularBoardIcon />,
  <RocketIcon />,
  <MsgOverlapIcon />,
  <BooksIcon />,
  <PaperIcon />,
  <InfoIcon />,
  <CopyIcon />,
];

const SideNav = () => {
  const classes = useStyles();
  return (
    <div className={`sideNavWrapper`}>
      <Drawer variant={`permanent`}>
        <div className={classes.drawerChange}>
          <Link href={`#`}>
            <div className={clsx(classes.imageWrapper, classes.logoChange)}>
              <Logo />
            </div>
          </Link>

          {listNav.map((value, index) => {
            return (
              <Link href={`#`}>
                <div className={classes.imageWrapper}>{value}</div>
              </Link>
            );
          })}
        </div>
      </Drawer>
    </div>
  );
};

export default SideNav;
