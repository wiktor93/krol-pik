import React, { useState } from "react"
import { makeStyles } from "@material-ui/core/styles"
import { Collapse, List, ListItem, ListItemText } from "@material-ui/core"
import { ExpandLess, ExpandMore } from "@material-ui/icons"
import { connect } from "react-redux"

import ExpansionButton from "../atoms/ExpansionButton"
import ExpansionDrawer from "../atoms/ExpansionDrawer"
import { categories } from "../../assets/SVGIconPaths"
import {
  setCategoryListSwitch,
  updateChosenCategory,
} from "../../redux/actions"

const useStyles = makeStyles(theme => ({
  nested: { paddingLeft: theme.spacing(4) },
}))

const CategoryList = props => {
  const {
    isOpen,
    setCategoryListSwitch,
    chosenCategory,
    updateChosenCategory,
  } = props

  const [isSubCatOpen, setSubCatOpen] = useState(false)
  const handleClick = () => setSubCatOpen(!isSubCatOpen)
  const classes = useStyles()
  const handleCategoryUpdate = e => updateChosenCategory(e.target.textContent)

  return (
    <div>
      <ExpansionButton
        iconPath={categories}
        condition={isOpen}
        onClick={() => setCategoryListSwitch(!isOpen)}
      >
        Kategorie
      </ExpansionButton>
      <Collapse in={isOpen} timeout="auto">
        <ExpansionDrawer>
          <List className={classes.root} onClick={handleCategoryUpdate}>
            <ListItem button selected={chosenCategory === "Rowery"}>
              <ListItemText primary="Rowery" />
            </ListItem>

            <ListItem button selected={chosenCategory === "Odzież rowerowa"}>
              <ListItemText primary="Odzież rowerowa" />
            </ListItem>

            <ListItem
              button
              onClick={handleClick}
              selected={chosenCategory === "Części rowerowe"}
            >
              <ListItemText primary="Części rowerowe" />
              {isSubCatOpen ? <ExpandLess /> : <ExpandMore />}
            </ListItem>

            <Collapse in={isSubCatOpen} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItem
                  button
                  className={classes.nested}
                  selected={chosenCategory === "Siodełka"}
                >
                  <ListItemText primary="Siodełka" />
                </ListItem>

                <ListItem
                  button
                  className={classes.nested}
                  selected={chosenCategory === "Łańcuchy"}
                >
                  <ListItemText primary="Łańcuchy" />
                </ListItem>
              </List>
            </Collapse>

            <ListItem button selected={chosenCategory === "Akcesoria rowerowe"}>
              <ListItemText primary="Akcesoria rowerowe" />
            </ListItem>
          </List>
        </ExpansionDrawer>
      </Collapse>
    </div>
  )
}

const mapStateToProps = ({ categoryList }) => ({
  isOpen: categoryList.isOpen,
  chosenCategory: categoryList.chosenCategory,
})

export default connect(mapStateToProps, {
  setCategoryListSwitch,
  updateChosenCategory,
})(CategoryList)
