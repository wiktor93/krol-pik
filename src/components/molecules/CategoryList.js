import React, { useState } from "react"
import styled from "styled-components"
import { makeStyles } from "@material-ui/core/styles"
import { Collapse, List, ListItem, ListItemText } from "@material-ui/core"
import { ExpandLess, ExpandMore } from "@material-ui/icons"

import Button from "../atoms/Button"
import { categories } from "../../assets/SVGIconPaths"

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
}))

const StyledList = styled(List)`
  border: 1px solid black;
  border-top: none;
`

const CategoryList = () => {
  const classes = useStyles()
  const [open, setOpen] = React.useState(true)
  const [listSwitch, setListSwitch] = useState(false)

  const handleClick = () => {
    setOpen(!open)
  }
  return (
    <div>
      <Button
        secondary
        SVGPath={categories}
        onClick={() => setListSwitch(!listSwitch)}
      >
        Kategorie
      </Button>

      <Collapse in={listSwitch} timeout="auto" unmountOnExit>
        <StyledList
          component="nav"
          aria-labelledby="nested-list-subheader"
          className={classes.root}
        >
          <ListItem button>
            <ListItemText primary="Rowery" />
          </ListItem>

          <ListItem button>
            <ListItemText primary="Odzież rowerowa" />
          </ListItem>

          <ListItem button onClick={handleClick}>
            <ListItemText primary="Cześci rowerowe" />
            {open ? <ExpandLess /> : <ExpandMore />}
          </ListItem>

          <Collapse in={open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem button className={classes.nested}>
                <ListItemText primary="Siodełka" />
              </ListItem>
              <ListItem button className={classes.nested}>
                <ListItemText primary="Łańcuchy" />
              </ListItem>
            </List>
          </Collapse>

          <ListItem button onClick={handleClick}>
            <ListItemText primary="Cześci rowerowe" />
            {open ? <ExpandLess /> : <ExpandMore />}
          </ListItem>

          <Collapse in={open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem button className={classes.nested}>
                <ListItemText primary="Siodełka" />
              </ListItem>
              <ListItem button className={classes.nested}>
                <ListItemText primary="Łańcuchy" />
              </ListItem>
            </List>
          </Collapse>

          <ListItem button>
            <ListItemText primary="Akcesoria rowerowe" />
          </ListItem>
        </StyledList>
      </Collapse>
    </div>
  )
}
export default CategoryList
