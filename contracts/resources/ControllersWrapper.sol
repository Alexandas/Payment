// SPDX-License-Identifier: GPL-3.0-only

pragma solidity >=0.8.0;

import '@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol';
import '../resources/interfaces/INormalResourceController.sol';
import '../resources/interfaces/IIPFSStorageController.sol';

/// @author Alexandas
/// @dev all resource controller wrapper contract
abstract contract ControllersWrapper is OwnableUpgradeable {
	/// @dev return building time controller
	INormalResourceController public buildingTimeController;

	/// @dev return bandwidth controller
	INormalResourceController public bandwidthController;

	/// @dev return AR storage controller
	INormalResourceController public arStorageController;

	/// @dev return ipfs storage controller
	IIPFSStorageController public ipfsStorageController;

	/// @dev emit when building time controller updated
	/// @param _buildingTimeController building time controller contract
	event BuildingTimeControllerUpdated(INormalResourceController _buildingTimeController);

	/// @dev emit when bandwidth controller updated
	/// @param _bandwidthController bandwidth controller contract
	event BandwidthControllerUpdated(INormalResourceController _bandwidthController);

	/// @dev emit when AR storage controller updated
	/// @param _arStorageController AR storage controller contract
	event ARStorageControllerUpdated(INormalResourceController _arStorageController);

	/// @dev emit when ipfs storage controller updated
	/// @param _ipfsStorageController IPFS storage controller contract
	event IPFSStorageControllerUpdated(IIPFSStorageController _ipfsStorageController);

	/// @dev update building time controller contract
	/// @param _buildingTimeController building time controller contract
	function setBuildingTimeController(INormalResourceController _buildingTimeController) external onlyOwner {
		_setBuildingTimeController(_buildingTimeController);
	}

	/// @dev update bandwidth controller contract
	/// @param _bandwidthController bandwidth controller contract
	function setBandwidthController(INormalResourceController _bandwidthController) external onlyOwner {
		_setBandwidthController(_bandwidthController);
	}

	/// @dev update AR storage controller contract
	/// @param _arStorageController AR storage controller contract
	function setARStorageController(INormalResourceController _arStorageController) external onlyOwner {
		_setARStorageController(_arStorageController);
	}

	/// @dev update ipfs storage controller contract
	/// @param _ipfsStorageController IPFS storage controller contract
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
