// SPDX-License-Identifier: UNLICENSE

pragma solidity >=0.8.0;

import '@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol';

abstract contract OperatorsUpgradeable is OwnableUpgradeable {
	mapping(address => bool) public operators;

	event AddOperator(address operator);

	event RemoveOperator(address operator);

	modifier onlyOperator() {
		require(isOperator(msg.sender), 'Operators: caller is not operator');
		_;
	}

	function __Init_Operators(address[] memory operators) internal onlyInitializing {
		for(uint i = 0; i < operators.length; i++) {
			_addOperator(operators[i]);
		}
	}

	function addOperator(address operator) external onlyOwner {
		_addOperator(operator);
	}

	function removeOperator(address operator) external onlyOwner {
		_removeOperator(operator);
	}

	function _addOperator(address operator) internal {
		require(!isOperator(operator), 'Operators: operator is already added');
		operators[operator] = true;
		emit AddOperator(operator);
	}

	function _removeOperator(address operator) internal {
		require(isOperator(operator), 'Operators: invalid operator');
		delete operators[operator];
		emit RemoveOperator(operator);
	}

	function isOperator(address operator) public view returns(bool) {
		return operators[operator];
	}

}
