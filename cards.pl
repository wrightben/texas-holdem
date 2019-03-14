#!/usr/bin/perl

# DOC:
# $ ./cards.pl < cards.txt | pbcopy


@contents = <STDIN>;
chomp @contents;

@ftr = split ' ', shift @contents;

@ftrp = ();
foreach (@ftr) {
	$_ =~ /(.)(.)/;
	push @ftrp, uc($1).$2;
}

# Flop, Turn, River
$hand = '"'.(join '","', @ftrp).'"';


# Individual Hands
@hands = ();
foreach (@contents) {
	$_ =~ /(.)(.)\s(.)(.)/;
	push @hands, '["' . uc($1).$2 .'","'. uc($3).$4 . '",'. $hand . "]";
}


print "[\n\t", (join ",\n\t", @hands),"\n]";

exit 0;