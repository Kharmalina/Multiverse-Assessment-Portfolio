import React, { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Fab from '@mui/material/Fab';
import FavoriteIcon from '@mui/icons-material/Favorite';

function Items({ currentItems }) {
  return (
    <div className="items">
      {currentItems &&
        currentItems.map((car, idx) => (
          <Card
            sx={{
              m: 2,
              height: 340,
              maxWidth: 845,
              display: "flex",
              flexDirection: "row",
            }}
          >
            <CardMedia sx={{ width: 440 }} image={car.image} />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {car.year} {car.make} {car.model}
              </Typography>
              <Typography
                className="font-weight-bold"
                variant="subtitle1"
                color="text.secondary"
              >
                Price: ${car.price.toLocaleString("en-US")}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Color: {car.color}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Mileage: {car.mileage.toLocaleString("en-US")} mi.
              </Typography>

              <CardActions sx={{ flex: '1 0 auto' }} >
                <Button variant="outlined" size="small">Calculate Payment</Button>
                {/* <Button variant="outlined" color="warning" size="medium">Favorite </Button> */}
                <Fab variant="extended" size="medium" color="error" aria-label="like">
                  <FavoriteIcon sx={{ mr: 1 }} />
                  Favorite
                </Fab>
              </CardActions>
            </CardContent>
          </Card>
        ))}
    </div>
  );
}

function PaginatedItems({ itemsPerPage, carsFilteredList }) {
  // We start with an empty list of items.
  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
    // Fetch items from another resources.
    const endOffset = itemOffset + itemsPerPage;
    // console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    setCurrentItems(carsFilteredList.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(carsFilteredList.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, carsFilteredList]);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % carsFilteredList.length;
    // console.log(`User requested page number ${event.selected}, which is offset ${newOffset}`);
    setItemOffset(newOffset);
  };

  return (
    <>
      <Items currentItems={currentItems} />
      <ReactPaginate
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        marginPagesDisplayed={2}
        pageCount={pageCount}
        previousLabel="< previous"
        pageClassName="page-item"
        pageLinkClassName="page-link"
        previousClassName="page-item"
        previousLinkClassName="page-link"
        nextClassName="page-item"
        nextLinkClassName="page-link"
        breakLabel="..."
        breakClassName="page-item"
        breakLinkClassName="page-link"
        containerClassName="pagination"
        activeClassName="active"
        renderOnZeroPageCount={null}
      />
    </>
  );
}

export default PaginatedItems;
