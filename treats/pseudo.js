//Logic for addition and removal of treats for non-members
if(treats_subscription_added){
	add_to_cart(treats_item);

	if(treats_subscription_removed){
		alert("Are you sure you want to remove the subscription? This will also remove the free dessert.");

		if(alert()==yes){
			remove_from_cart(treats_subscription && treats_item)
		}else{
			return
		}
	}
}