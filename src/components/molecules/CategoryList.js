import React, { useState } from "react"
import { makeStyles } from "@material-ui/core/styles"
import { Collapse, List, ListItem, ListItemText } from "@material-ui/core"
import { ExpandLess, ExpandMore } from "@material-ui/icons"

import ExpansionButton from "../atoms/ExpansionButton"
import ExpansionDrawer from "../atoms/ExpansionDrawer"
import { categories } from "../../assets/SVGIconPaths"

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
}))

const CategoryList = () => {
  const [listSwitch, setListSwitch] = useState(true)
  const [open, setOpen] = useState(false)
  const classes = useStyles()

  const handleClick = () => {
    setOpen(!open)
  }
  return (
    <div>
      <ExpansionButton
        iconPath={categories}
        condition={listSwitch}
        onClick={() => setListSwitch(!listSwitch)}
      >
        Kategorie
      </ExpansionButton>
      <Collapse in={listSwitch} timeout="auto">
        <ExpansionDrawer>
          <List
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
          </List>
        </ExpansionDrawer>
      </Collapse>
    </div>
  )
}
export default CategoryList
