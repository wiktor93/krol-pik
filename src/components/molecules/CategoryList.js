import React, { useState } from "react"
import { makeStyles } from "@material-ui/core/styles"
import { Collapse, List, ListItem, ListItemText } from "@material-ui/core"
import { ExpandLess, ExpandMore } from "@material-ui/icons"
import { connect } from "react-redux"

import ExpansionButton from "../atoms/ExpansionButton"
import ExpansionDrawer from "../atoms/ExpansionDrawer"
import { categories } from "../../assets/SVGIconPaths"
import { categoryListSwitch, updateChosenCategory } from "../../redux/actions"

const useStyles = makeStyles(theme => ({
  nested: { paddingLeft: theme.spacing(4) },
}))

const CategoryList = props => {
  const { isOpen, categoryListSwitch, updateChosenCategory } = props

  const [isSubCatOpen, setSubCatOpen] = useState(false)
  const handleClick = () => setSubCatOpen(!isSubCatOpen)
  const classes = useStyles()
  const handleCategoryUpdate = e => updateChosenCategory(e.target.textContent)
  return (
    <div>
      <ExpansionButton
        iconPath={categories}
        condition={isOpen}
        onClick={() => categoryListSwitch(!isOpen)}
      >
        Kategorie
      </ExpansionButton>
      <Collapse in={isOpen} timeout="auto">
        <ExpansionDrawer>
          <List className={classes.root} onClick={handleCategoryUpdate}>
            <ListItem button>
              <ListItemText primary="Rowery" />
            </ListItem>

            <ListItem button>
              <ListItemText primary="Odzież rowerowa" />
            </ListItem>

            <ListItem button onClick={handleClick}>
              <ListItemText primary="Części rowerowe" />
              {isSubCatOpen ? <ExpandLess /> : <ExpandMore />}
            </ListItem>

            <Collapse in={isSubCatOpen} timeout="auto" unmountOnExit>
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

const mapStateToProps = ({ categoryList }) => ({
  isOpen: categoryList.isOpen,
})

export default connect(mapStateToProps, {
  categoryListSwitch,
  updateChosenCategory,
})(CategoryList)
