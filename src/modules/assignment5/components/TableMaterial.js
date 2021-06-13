import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import { Link } from "@material-ui/core";
import { Button, Typography } from "@material-ui/core";
import clsx from "clsx";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";

const rows = [
  {
    seller: "chandanbits007 (55;100%)",
    paymentMethod: "IMPS Bank Transfer India",
    price: "22172.58 INR",
    limit: "2500.00 - 20000.00 INR",
  },
  {
    seller: "chandanbits007 (55;100%)",
    paymentMethod: "IMPS Bank Transfer India",
    price: "22172.58 INR",
    limit: "2500.00 - 20000.00 INR",
  },
  {
    seller: "chandanbits007 (55;100%)",
    paymentMethod: "IMPS Bank Transfer India",
    price: "22172.58 INR",
    limit: "2500.00 - 20000.00 INR",
  },
  {
    seller: "chandanbits007 (55;100%)",
    paymentMethod: "IMPS Bank Transfer India",
    price: "22172.58 INR",
    limit: "2500.00 - 20000.00 INR",
  },
  {
    seller: "chandanbits007 (55;100%)",
    paymentMethod: "IMPS Bank Transfer India",
    price: "22172.58 INR",
    limit: "2500.00 - 20000.00 INR",
  },
  {
    seller: "chandanbits007 (55;100%)",
    paymentMethod: "IMPS Bank Transfer India",
    price: "22172.58 INR",
    limit: "2500.00 - 20000.00 INR",
  },
];

const useStyles = makeStyles({
  tableTitle: {
    fontSize: "30px",
    marginBottom: "10px",
  },
  tableMaker: {
    width: "100%",
    margin: "10px 0",
  },
  tableLink: {
    textDecoration: "underline",
    fontSize: "16px",
  },
  dot: {
    fill: "#81c784",
  },
  sellerCell: {
    display: "flex",
  },
  paymentCell: {
    display: "flex",
  },
  flagCell: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginRight: "5px",
  },
  priceCell: {
    color: "green",
    fontWeight: "bold",
    fontSize: "20px",
  },

  limitBtn: {
    width: "50px",
    "&.MuiButton-contained": {
      backgroundColor: "#ffba1f",
      color: "white",
    },
    "&.MuiButton-contained:hover": {
      backgroundColor: "rgb(178, 130, 21)",
    },
  },
  colTitle: {
    fontWeight: "bold",
  },
  hoverEffect: {
    "&:hover": {
      backgroundColor: "#f4f6f8",
    },
  },
});

const headerRows = ["Seller", "Payment method", "Price/XMR", "Limits", ""];

const TableMaterial = () => {
  const classes = useStyles();
  return (
    <Box className={classes.tableMaker}>
      <Typography
        className={classes.tableTitle}
      >{`Buy Monero online in India`}</Typography>
      <TableContainer component={Paper}>
        <Table className={``} aria-label="simple table">
          <TableHead>
            <TableRow>
              {headerRows.map((value, index) => {
                if (index === 3) {
                  return (
                    <TableCell
                      align={`right`}
                      padding={`none`}
                      className={clsx(classes.colTitle)}
                    >
                      <Typography>{value}</Typography>
                    </TableCell>
                  );
                }
                return (
                  <TableCell padding={`none`}>
                    <Typography>{value}</Typography>
                  </TableCell>
                );
              })}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.seller} className={clsx(classes.hoverEffect)}>
                <TableCell padding={`none`} component="th" scope="row">
                  <Link href="#" className={clsx(classes.tableLink)}>
                    <Box className={clsx(classes.sellerCell)}>
                      <Typography>{row.seller}</Typography>
                      <FiberManualRecordIcon className={clsx(classes.dot)} />
                    </Box>
                  </Link>
                </TableCell>
                <TableCell padding={`none`}>
                  <Box className={clsx(classes.paymentCell)}>
                    <Box className={clsx(classes.flagCell)}>
                      <img
                        src={`https://lh3.googleusercontent.com/proxy/rfrUOfV7RsEX4ppskAo9OhYZ7_v7ZMwU0UPZPH7X-Y5LZayRck_WnrQTh4HNLeFozmURJ0e3xMCm8zOqFiCyaO4DD5OKJrrdD-e7aBlOs0qOKA`}
                        alt={`IndiaFlag`}
                        height={`20px`}
                        width={`20px`}
                      />
                    </Box>
                    <Box>
                      <Box style={{ display: "flex" }}>
                        <img
                          src={`data:image/png;base64,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`}
                          alt={`IndiaFlag`}
                          height={`20px`}
                          width={`20px`}
                        />
                        <Typography>{row.paymentMethod}</Typography>
                      </Box>
                      <Typography>{`UPI`}</Typography>
                    </Box>
                  </Box>
                </TableCell>
                <TableCell padding={`none`}>
                  <Typography className={clsx(classes.priceCell)}>
                    {row.price}
                  </Typography>
                </TableCell>
                <TableCell padding={`none`} align={`right`}>
                  <Typography>{row.limit}</Typography>
                </TableCell>
                <TableCell padding={`none`} align={`right`}>
                  <Button
                    color={`default`}
                    variant={`contained`}
                    className={clsx(classes.limitBtn)}
                  >{`Buy`}</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default TableMaterial;
