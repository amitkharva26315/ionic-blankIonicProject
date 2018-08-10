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
      this.file.createDir(this.file.externalDataDirectory, this.fileOperations.src, false)
        .then(() => this.showToast(this.fileOperations.src + ' Created'))
        .catch((err) => alert(JSON.stringify(err)));
    } else if (this.fileOperations.operation == 'createDirT') {
      this.file.createDir(this.file.externalDataDirectory, this.fileOperations.src, true)
        .then(() => this.showToast(this.fileOperations.src + ' Created'))
        .catch((err) => alert(JSON.stringify(err)));
    } else if (this.fileOperations.operation == 'removeDir') {
      this.file.removeDir(this.file.externalDataDirectory, this.fileOperations.src)
        .then(() => this.showToast(this.fileOperations.src + ' removed'))
        .catch((err) => alert(JSON.stringify(err)));
    } else if (this.fileOperations.operation == 'listDir') {
      this.file.listDir(this.file.externalDataDirectory, this.fileOperations.src)
        .then((res) => { this.listDir = res; this.showToast('directory and files inside :' + this.file.externalDataDirectory + '/' + this.fileOperations.src + ' are listed in page...'); alert(JSON.stringify(res)); })
        .catch((err) => alert(JSON.stringify(err)));
    } else if (this.fileOperations.operation == 'rmDirRec') {
      this.file.removeRecursively(this.file.externalDataDirectory, this.fileOperations.src)
        .then(() => this.showToast(this.fileOperations.src + ' removed recursively'))
        .catch((err) => alert(JSON.stringify(err)));
    } else if (this.fileOperations.operation == 'checkFile') {
      this.file.checkFile(this.file.externalDataDirectory, this.fileOperations.src)
        .then(() => this.showToast(this.fileOperations.src + ' file created'))
        .catch((err) => alert(JSON.stringify(err)));
    } else if (this.fileOperations.operation == 'createFileT') {
      this.file.createFile(this.file.externalDataDirectory, this.fileOperations.src, true)
        .then(() => this.showToast(this.fileOperations.src + ' created'))
        .catch((err) => alert(JSON.stringify(err)));
    } else if (this.fileOperations.operation == 'createFileF') {
      this.file.createFile(this.file.externalDataDirectory, this.fileOperations.src, false)
        .then(() => this.showToast(this.fileOperations.src + ' created'))
        .catch((err) => alert(JSON.stringify(err)));
    } else if (this.fileOperations.operation == 'removeFile') {
      this.file.removeFile(this.file.externalDataDirectory, this.fileOperations.src)
        .then(() => this.showToast(this.fileOperations.src + ' removed'))
        .catch((err) => alert(JSON.stringify(err)));
    } else if (this.fileOperations.operation == 'writeFile') {
      this.file.writeFile(this.file.externalDataDirectory, this.fileOperations.src, this.fileOperations.des)//des as text
        .then(() => this.showToast(this.fileOperations.src + ' removed'))
        .catch((err) => alert(JSON.stringify(err)));
    } else if (this.fileOperations.operation == 'writeExistingFile') {
      this.file.writeExistingFile(this.file.externalDataDirectory, this.fileOperations.src, this.fileOperations.des)//des as text
        .then(() => this.showToast(this.fileOperations.src + ' removed'))
        .catch((err) => alert(JSON.stringify(err)));
    }

    /* Not Working properly */
    // else if (this.fileOperations.operation == 'moveDir') {
    //   this.file.moveDir(this.file.externalDataDirectory, this.fileOperations.src, this.file.externalDataDirectory, this.fileOperations.des)//'MoveCopy')
    //     .then(() => this.showToast(this.fileOperations.src + ' Moved to ' + this.fileOperations.des))
    //     .catch((err) => alert(JSON.stringify(err)));
    // } else if (this.fileOperations.operation == 'copyDir') {
    //   this.file.copyDir(this.file.externalDataDirectory, this.fileOperations.src, this.file.externalDataDirectory, this.fileOperations.des)
    //     .then(() => this.showToast(this.fileOperations.src + ' Copied to ' + this.fileOperations.des))
    //     .catch((err) => alert(JSON.stringify(err)));
    // }
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
      .catch(e => alert("error: " + JSON.stringify(e)));
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