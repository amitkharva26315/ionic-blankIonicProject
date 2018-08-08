import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { File } from '@ionic-native/file';
import { FileChooser } from '@ionic-native/file-chooser';
// import { FileEncryption } from '@ionic-native/file-encryption';

/**
 * Generated class for the NativeFilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-native-file',
  templateUrl: 'native-file.html',
})
export class NativeFilePage {

  fileURI: string = '';
  filepaths: any = {};
  listDir: any[] = [];
  fileOperations: any = {};

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public toastCtrl: ToastController,
    private file: File,
    private fileChooser: FileChooser
    // private fileEncryption: FileEncryption
  ) { }

  showToast(msg) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 2000,
      position: 'bottom'
    });

    toast.present(toast);
  }

  ionViewDidLoad() {
    this.filepaths.applicationDirectory = this.file.applicationDirectory;
    this.filepaths.applicationStorageDirectory = this.file.applicationStorageDirectory;
    this.filepaths.dataDirectory = this.file.dataDirectory;
    this.filepaths.cacheDirectory = this.file.cacheDirectory;
    this.filepaths.externalApplicationStorageDirectory = this.file.externalApplicationStorageDirectory;
    this.filepaths.externalDataDirectory = this.file.externalDataDirectory;
    this.filepaths.externalCacheDirectory = this.file.externalCacheDirectory;
    this.filepaths.externalRootDirectory = this.file.externalRootDirectory;
    this.filepaths.tempDirectory = this.file.tempDirectory;
    this.filepaths.syncedDataDirectory = this.file.syncedDataDirectory;
    this.filepaths.documentsDirectory = this.file.documentsDirectory;
    this.filepaths.sharedDirectory = this.file.sharedDirectory;

    this.filepaths.FreeSpaceInBytes = this.file.getFreeDiskSpace();
    console.log('ionViewDidLoad NativeFilePage');
  }

  fileOperationsFunc() {
    if (this.fileOperations.operation == 'createDirF') {
      this.file.createDir(this.file.externalDataDirectory, this.fileOperations.src, false)//'Sasur'
        .then(() => this.showToast(this.fileOperations.src + ' Created'))
        .catch((err) => alert(err));
    } else if (this.fileOperations.operation == 'createDirT') {
      this.file.createDir(this.file.externalDataDirectory, this.fileOperations.src, true)//'Masi'
        .then(() => this.showToast(this.fileOperations.src + ' Created'))
        .catch((err) => alert(err));
    } else if (this.fileOperations.operation == 'removeDir') {
      this.file.removeDir(this.file.externalDataDirectory, this.fileOperations.src)//'Nikad')
        .then(() => this.showToast(this.fileOperations.src + ' removed'))
        .catch((err) => alert(err));
    } else if (this.fileOperations.operation == 'moveDir') {
      this.file.moveDir(this.file.externalDataDirectory, this.fileOperations.src, this.file.externalDataDirectory, this.fileOperations.des)//'MoveCopy')//'Haal'
        .then(() => this.showToast(this.fileOperations.src + ' Moved to ' + this.fileOperations.des))
        .catch((err) => alert(err));
    } else if (this.fileOperations.operation == 'copyDir') {
      this.file.copyDir(this.file.externalDataDirectory, this.fileOperations.src, this.file.externalDataDirectory, this.fileOperations.des)//'Nakal'//'MoveCopy'
        .then(() => this.showToast(this.fileOperations.src + ' Copied to ' + this.fileOperations.des))
        .catch((err) => alert(err));
    } else if (this.fileOperations.operation == 'listDir') {
      this.file.listDir(this.file.externalDataDirectory, this.fileOperations.des)//'Goat')
        .then((res) => { this.listDir = res; })
        .catch((err) => alert(err));
    }
  }

  checkDir(val) {
    console.log(val);
    alert('this.file.dataDirectory: ' + this.file.externalRootDirectory);

    if (val == "Hike") {
      alert('checking /Hike directory');
      this.file.checkDir(this.file.externalRootDirectory, 'Hike')
        .then(() => alert('Directory exists'))
        .catch((err) => alert('Directory doesn\'t exist'));
    }
    else if (val == "mydir") {
      alert('checking /mydir directory');
      this.file.checkDir(this.file.externalRootDirectory, 'mydir')
        .then(() => alert('Directory exists'))
        .catch((err) => alert('Directory doesn\'t exist'));
    }
    else if (val == 'fileURI') {
      alert('checking ' + this.fileURI + " directory...");
      this.file.checkDir(this.file.externalRootDirectory, this.fileURI)
        .then(() => alert('Directory exists'))
        .catch((err) => alert('Directory doesn\'t exist'));
    }
  }

  chooseFile(event) {
    this.fileChooser.open()
      .then(uri => {
        this.fileURI = uri;
        alert("fileURI: " + this.fileURI);
      })
      .catch(e => alert("error: " + e));
  }

  EncriptDecriptFile(action) {
    // if (this.fileURI != '') {
    //   if (action == 'encript')
    //     this.fileEncryption.decrypt('assets/json/topSecret.json', '1111-2222-3333-44444');
    //   else if (action == 'encript')
    //     this.fileEncryption.encrypt('assets/json/topSecret.json', '1111-2222-3333-44444');
    // }
    // else
    //   alert("Empty file path, Please choose a file!");
  }
}