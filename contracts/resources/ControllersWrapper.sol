// SPDX-License-Identifier: GPL-3.0-only

pragma solidity >=0.8.0;

import '@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol';
import '../resources/interfaces/INormalResourceController.sol';
import '../resources/interfaces/IIPFSStorageController.sol';

abstract contract ControllersWrapper is OwnableUpgradeable {

	INormalResourceController public buildingTimeController;

	INormalResourceController public bandwidthController;

	INormalResourceController public arStorageController;

	IIPFSStorageController public ipfsStorageController;

	event BuildingTimeControllerUpdated(INormalResourceController _buildingTimeController);

	event BandwidthControllerUpdated(INormalResourceController _bandwidthController);

	event ARStorageControllerUpdated(INormalResourceController _arStorageController);

	event IPFSStorageControllerUpdated(IIPFSStorageController _ipfsStorageController);

	function setBuildingTimeController(INormalResourceController _buildingTimeController) external onlyOwner {
		_setBuildingTimeController(_buildingTimeController);
	}

	function setBandwidthController(INormalResourceController _bandwidthController) external onlyOwner {
		_setBandwidthController(_bandwidthController);
	}

	function setARStorageController(INormalResourceController _arStorageController) external onlyOwner {
		_setARStorageController(_arStorageController);
	}

	function setIPFSStorageController(IIPFSStorageController _ipfsStorageController) external onlyOwner {
		_setIPFSStorageController(_ipfsStorageController);
	}

	function _setBuildingTimeController(INormalResourceController _buildingTimeController) internal {
		buildingTimeController = _buildingTimeController;
		emit BuildingTimeControllerUpdated(_buildingTimeController);
	}

	function _setBandwidthController(INormalResourceController _bandwidthController) internal {
		bandwidthController = _bandwidthController;
		emit BandwidthControllerUpdated(_bandwidthController);
	}

	function _setARStorageController(INormalResourceController _arStorageController) internal {
		arStorageController = _arStorageController;
		emit ARStorageControllerUpdated(_arStorageController);
	}

	function _setIPFSStorageController(IIPFSStorageController _ipfsStorageController) internal {
		ipfsStorageController = _ipfsStorageController;
		emit IPFSStorageControllerUpdated(_ipfsStorageController);
	}

}
