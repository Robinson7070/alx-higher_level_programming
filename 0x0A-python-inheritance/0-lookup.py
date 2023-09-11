#!/usr/bin/python3
"""Defines an object attrbute lookup function""""


def lookup(obj):
	"""Return a list of an object's avilable attributes."""
	return dir(obj)
