




////////////////////////////////////////////////////////////
//Logic for addition and removal of treats for non-members//
////////////////////////////////////////////////////////////
if(treats_subscription_added){
	add_to_cart(treats_item);

	if(treats_subscription_removed){
		alert("Are you sure you want to remove the subscription?");

		if(alert()==yes){
			remove_from_cart(treats_subscription && treats_item)
		}else{
			do_nothing()
		}
	}
}



/////////////////////////////////////////////////////////
//Logic for addition and removal of treats for members//
/////////////////////////////////////////////////////////
if(in_cart(treats_item)){
	if(remove_from_cart(treats_item)){
		alert("Are you sure you want to remove the free item?");
		if(alert()==yes)
			remove_from_cart(treats_item);
		else
			do_nothing();
	}

	if(add_to_cart(treats_item)){
		add_to_cart(treats_item);
	}
}