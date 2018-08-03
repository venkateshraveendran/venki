({
    clickAdd: function(component, event, helper) {

        // Get the values from the form
        var n1 = component.get("v.listviewid");
        

        // Display the total in a "toast" status message
        var resultsToast = $A.get("e.force:showToast");
        
        resultsToast.fire();

        // Close the action panel
        var dismissActionPanel = $A.get("e.force:closeQuickAction");
        dismissActionPanel.fire();
    }

})